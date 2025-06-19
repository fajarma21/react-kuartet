import { useCallback, useEffect, useState } from 'react';

import Card from '@/components/Card';
import Hand from '@/components/Hand';
import {
  CARDS,
  STATUS_ACTION,
  STATUS_COLLECT,
  STATUS_DRAW,
  STATUS_NONE,
  STATUS_SELECT,
} from '@/constants';
import { CardData, Status, Turn } from '@/types';

import ActionButtons from './components/ActionButtons';
import DrawPile from './components/DrawPile';
import Kuartets from './components/Kuartets';
import { KUARTET, PLAYER, START_CARDS } from './index.constants';
import { randomTurn, shuffle } from './index.helpers';
import * as css from './index.styles';
import { HandData } from './index.types';

const App = () => {
  const [turn, setTurn] = useState(-1);
  const [drawPile, setDrawPile] = useState<CardData[]>([]);
  const [hands, setHands] = useState<HandData[]>([]);
  const [winner, setWinner] = useState(-1);
  const [isFinished, setIsFinished] = useState(false);
  const [status, setStatus] = useState<Status>();
  const [selectedType, setSelectedType] = useState(0);
  const [drawTurn, setDrawTurn] = useState<Turn>(-1);

  const [alreadyDraw, setAlreadyDraw] = useState(false);
  const [botId, setBotId] = useState(0);

  const handleShuffle = useCallback(() => {
    setTurn(-1);

    const shuffled = shuffle(CARDS);
    setDrawPile(shuffled);

    setHands(
      [...Array(PLAYER)].map(() => ({
        cards: [],
        kuartets: [],
      }))
    );

    setWinner(-1);
    setIsFinished(false);
  }, []);

  useEffect(() => {
    handleShuffle();
  }, [handleShuffle]);

  const handleDeal = () => {
    const tempHands: HandData[] = [];

    for (let i = 0; i < drawPile.length; i++) {
      const hand: HandData = {
        cards: [],
        kuartets: [],
      };
      for (let j = 0; j < START_CARDS; j++) {
        hand.cards.push(drawPile[i * START_CARDS + j]);
      }
      tempHands.push(hand);
      if (tempHands.length === PLAYER) break;
    }

    setHands(tempHands);

    removeDrawPile(PLAYER * START_CARDS);
    setTurn(randomTurn(PLAYER));

    setStatus({ type: STATUS_ACTION });
  };

  const handleNextTurn = useCallback(
    (currentPile: CardData[]) => {
      setTimeout(() => {
        setDrawTurn(-1);
        setAlreadyDraw(false);
        setBotId(0);
        setSelectedType(0);

        let nextTurn = turn + 1;
        if (nextTurn === PLAYER) nextTurn = 0;

        setTurn(nextTurn);

        if (!currentPile.length && !hands[nextTurn].cards.length) {
          setIsFinished(true);
          setStatus(undefined);
          return;
        }

        setStatus({ type: STATUS_ACTION });
      }, 1000);
    },
    [hands, turn]
  );

  const checkKuartet = useCallback(
    (cards: CardData[], handIndex: number) => {
      if (cards.length < KUARTET) return;

      const sorted = structuredClone(cards).sort((a, b) => a.id - b.id);

      let check: CardData = cards[0];
      let sameType: CardData[] = [cards[0]];
      const kuartets: CardData[] = [];
      for (const card of sorted) {
        if (check.id !== card.id) {
          if (check.type === card.type) {
            sameType.push(card);
            if (sameType.length === KUARTET) kuartets.push(sameType[0]);
          } else {
            check = card;
            sameType = [card];
          }
        }
      }

      if (kuartets.length) {
        const newHands = hands.map((hand, idx) => {
          if (handIndex === idx) {
            return {
              ...hand,
              cards: hand.cards.filter(
                (card) => !kuartets.find((item) => item.type === card.type)
              ),
              kuartets: [...hand.kuartets, ...kuartets],
            };
          }
          return hand;
        });

        const kuartetLength = newHands[handIndex].kuartets.length;
        if (winner < kuartetLength) setWinner(kuartetLength);
        setHands(newHands);
      }
    },
    [hands, winner]
  );

  const removeDrawPile = useCallback(
    (count = 1) => {
      const newDrawPile = drawPile.slice(count, drawPile.length);
      setDrawPile(newDrawPile);

      return newDrawPile;
    },
    [drawPile]
  );

  const handleDraw = useCallback(() => {
    setAlreadyDraw(true);
    setStatus({ type: STATUS_DRAW });

    const newCards = hands.map((item, idx) => {
      if (turn === idx) {
        return {
          ...item,
          cards: [...item.cards, drawPile[0]],
        };
      }
      return item;
    });

    setDrawTurn(turn as Turn);
    setHands(newCards);
    checkKuartet(newCards[turn].cards, turn);
    const newDrawPile = removeDrawPile();

    handleNextTurn(newDrawPile);
  }, [checkKuartet, drawPile, handleNextTurn, hands, removeDrawPile, turn]);

  const handleSelect = useCallback(
    (data: CardData) => {
      const cardValues = JSON.stringify({
        color: data.color,
        text: data.text,
        textColor: data.textColor,
      });
      setStatus({ type: STATUS_SELECT, values: cardValues });
      setSelectedType(data.type);

      setTimeout(() => {
        setSelectedType(0);
        const allSameType: CardData[] = [];
        const tempHands: HandData[] = [];

        for (let i = 0; i < hands.length; i++) {
          const hand = hands[i];
          if (i !== turn) {
            const sameType: CardData[] = [];
            for (let j = 0; j < hand.cards.length; j++) {
              const item = hand.cards[j];
              if (item.type === data.type) sameType.push(item);
            }
            hand.cards = hand.cards.filter(
              (handCard) =>
                !sameType.find((card) => card.type === handCard.type)
            );
            allSameType.push(...sameType);
          }
          tempHands.push(hand);
        }

        if (allSameType.length) {
          setStatus({
            type: STATUS_COLLECT,
            values: JSON.stringify({
              ...JSON.parse(cardValues),
              length: allSameType.length,
            }),
          });
          const newHands = tempHands.map((newHand, idx) => {
            if (idx === turn) {
              return {
                ...newHand,
                cards: [...newHand.cards, ...allSameType],
              };
            }
            return newHand;
          });

          setHands(newHands);
          checkKuartet(newHands[turn].cards, turn);
        } else {
          setStatus({ type: STATUS_NONE, values: cardValues });
        }

        handleNextTurn(drawPile);
      }, 1000);
    },
    [checkKuartet, drawPile, handleNextTurn, hands, turn]
  );

  const botTurn = useCallback(() => {
    setBotId(turn);

    const randomNumber = 1000 + Math.round(Math.random() * 1000);
    const currentHand = hands[turn];
    if (currentHand.cards.length) {
      setTimeout(() => {
        if (randomNumber % 2 || !drawPile.length) {
          const randomIndex = Math.floor(
            Math.random() * currentHand.cards.length
          );

          const randomCard = currentHand.cards[randomIndex];
          handleSelect(randomCard);
        } else handleDraw();
      }, randomNumber);
    } else {
      setTimeout(() => {
        handleDraw();
      }, randomNumber / 2);
    }
  }, [drawPile.length, handleDraw, handleSelect, hands, turn]);

  useEffect(() => {
    if (turn !== botId && turn > 0 && !isFinished) {
      botTurn();
    }
  }, [botTurn, turn, isFinished, botId]);

  const disableDraw = drawPile.length === CARDS.length || !!turn || alreadyDraw;
  return (
    <>
      <div className={css.centerTable}>
        <DrawPile
          count={drawPile.length}
          disabled={disableDraw}
          drawTurn={drawTurn}
          onClickDraw={handleDraw}
        />
        <ActionButtons
          disabled={disableDraw}
          itemLength={drawPile.length}
          isFinished={isFinished}
          onClickDeal={handleDeal}
          onClickDraw={handleDraw}
          onClickShuffle={handleShuffle}
        />
      </div>

      {hands.map((items, index) => {
        const currentTurn = index === turn;
        const isMainPlayer = !index;
        return (
          <Hand
            key={`hand-${index}`}
            currentTurn={!isFinished && currentTurn}
            index={index}
            isWinner={isFinished && items.kuartets.length === winner}
            status={currentTurn ? status : undefined}
            total={items.cards.length}
          >
            <Kuartets items={items.kuartets} />
            <>
              {items.cards.map((item) => (
                <Card
                  key={`card-${item.id}`}
                  {...item}
                  className={css.handCard}
                  disabled={turn !== index || isFinished || Boolean(turn)}
                  flip={!isMainPlayer}
                  selected={selectedType === item.type && !currentTurn}
                  onClick={() => handleSelect(item)}
                />
              ))}
            </>
          </Hand>
        );
      })}
    </>
  );
};

export default App;

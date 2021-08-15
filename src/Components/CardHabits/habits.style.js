import styled from "styled-components";

export const HabitCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  min-width: 300px;
  min-height: 155px;
  justify-content: center;
  background-image: var(--background-cards);
  border-radius: 50px;
  font-family: Sansita;
  color: var(--white);
  box-shadow: 5px 5px 10px 3px #00000054;
  margin-bottom: 10px;

  .Check {
    display: grid;
    place-items: center;
    width: 17%;

    button {
      width: 100%;
      background-image: var(--cream-gradient);
      color: var(--white);
      min-height: 100%;
      border-radius: 50px 0 0 50px;
      display: block;

      svg {
        display: block;
        font-size: clamp(5vw, 5.5vw, 6vw);
        margin: 0 auto;
        color: var(--blue-dark);
      }
    }
  }

  .Central {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 70%;

    .Progress {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: 5px 0 0 0;

      div {
        border-radius: 5px;
      }
      svg {
        font-size: 30px;
      }
    }

    p {
      color: var(--white);
      font-size: clamp(4vh, 4.5vh, 5vh);
      padding: 3px;
      font-weight: 700;
    }

    .BottomLabels {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;
      width: 95%;

      p {
        background-image: var(--dark-yellow-gradient);
        font-size: clamp(1.5vh, 2vh, 2.5vh);
        height: 30px;
        border-radius: 18px 0 18px 0;
        padding: 3px 7px;
        margin: 0 3px;
        line-height: 150%;
      }
    }
  }

  .Edit {
    display: grid;
    place-items: center;
    width: 15%;

    button {
      background-color: transparent;
      padding: 5px 5px;
      cursor: pointer;
      color: var(--white);
      font-size: 28px;
    }

    .DeleteButton {
      background-color: transparent;
      margin: 0 1px;
      border-radius: var(--border-radius);
      color: var(--red);

      svg {
        font-size: 28px;
      }
    }
  }

  @media (min-width: 767px) {
    width: 80%;
    .Central .BottomLabels p {
      font-size: clamp(1.5vh, 1.8vh, 2.4vh);
    }

    .Check button svg {
      font-size: clamp(3vw, 2.5vw, 4vw);
    }

    .Central p {
      font-size: clamp(2vh, 2.5vh, 3vh);
    }
  }

  @media (min-width: 1300px) {
    width: 48%;
    .Central p {
      font-size: clamp(2vw, 2.3vw, 3vw);
    }
    .Central .BottomLabels {
      justify-content: space-around;
    }
    .Central .BottomLabels p {
      margin: 0 3px;
      line-height: 100%;
      font-size: clamp(2vh, 2.3vh, 2.8vh);
    }
  }
`;

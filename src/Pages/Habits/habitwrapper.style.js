import styled from "styled-components";

export const HabitWrapper = styled.div`
  display: flex;
  font-family: "Sansita";
  color: var(--white);
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-image: var(--orange-gradient-background);

  .Filters {
    z-index: 1;
    position: absolute;
    top: 100%;
    right: 0;
  }
  .ContainerCards {
    width: 100%;
    display: grid;
    place-items: center;

    section {
      width: 70%;
      min-width: 320px;
      border-radius: 50px;
      background-image: var(--dark-blue-gradient);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      animation: appearing 1s ease-in-out backwards;
      animation-delay: 0.5s;
      border-bottom-right-radius: 0;

      header {
        background-image: var(--light-blue-gradient);
        border-radius: 50px 50px 0px 0px;
        width: 100%;
        height: 114px;
        display: grid;
        place-items: center;
        position: relative;

        h1 {
          width: 100%;
          border: none;
          font-size: clamp(9vw, 10vw, 11vw);
          text-align: center;
          line-height: 100px;
        }
      }

      .SubContainerCards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: 80vh;
        padding: 30px;
        overflow-y: auto;
        ::-webkit-scrollbar {
          width: 10px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
          background: var(--blue-dark);
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: var(--blue-light);
          border-radius: 5px;
          height: 500px;
        }
      }
    }
  }

  @media (min-width: 769px) {
    .ContainerCards section header h1 {
      font-size: clamp(5vw, 6vw, 7vw);
    }

    .ContainerCards section {
      width: 90%;
    }
  }

  @media (min-width: 1299px) {
    .ContainerCards section header h1 {
      font-size: clamp(4vw, 5vw, 6vw);
    }
  }

  @keyframes appearing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

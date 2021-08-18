import styled from "styled-components";

export const MenuAside = styled.div`
  background-color: transparent;
  animation: leftToRight 2s cubic-bezier(0.18, 0.89, 0.32, 1.28) backwards;

  aside {
    display: none;
    width: 100%;
    min-height: 100vh;
    background: var(--blue-dark);
    border-radius: 0px 50px 50px 0px;

    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
      font-size: 32px;
      font-weight: 700;
      text-align: center;
    }

    .ImgContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      img {
        background-color: red;
        width: 148px;
        height: 148px;
        border-radius: 100%;
        margin-bottom: 10px;
      }

      .EditUsername {
        display: flex;

        width: 100%;
        justify-content: center;
        color: var(--white);

        input {
          padding: 8px;
          width: 80%;
          background-color: var(--blue-dark);
          border-bottom: 3px var(--cream) solid;
          font-size: 32px;
          height: 32px;
        }

        span {
          padding: 5px;
          font-size: 32px;
          cursor: pointer;
        }

        button {
          width: 18px;

          height: 100%;
          height: 32px;

          svg {
            font-size: 16px;
          }
        }
      }
    }

    .ParagContainer {
      width: 100%;
      p {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 62px;
        text-align: center;
        font-size: 22px;
        cursor: pointer;

        svg {
          margin: 0 5px 0px 0px;
        }
      }

      .Hab {
        padding-left: 10px;
        background-image: var(--light-blue-gradient);
      }

      .MyGroup {
        padding-left: 10px;
        background-image: var(--dark-yellow-gradient);
      }

      .Descobrir {
        padding-left: 10px;
        background-image: var(--orange-gradient);
      }
    }
  }

  @media (min-width: 769px) {
    width: 20%;

    aside {
      display: flex;

      h1 {
        font-size: 32px;
      }

      span {
        font-size: 32px;
      }

      .ParagContainer p {
        font-size: 22px;
      }
    }
  }

  @media (min-width: 1300px) {
    aside {
      h1 {
        font-size: 34px;
      }

      span {
        font-size: 32px;
      }

      .ParagContainer p {
        font-size: 24px;
      }
    }
  }

  @keyframes leftToRight {
    from {
      transform: translateX(-150px);
    }
    to {
      transform: translateX(-1px);
    }
  }
`;

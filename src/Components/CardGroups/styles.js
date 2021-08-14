import styled from "styled-components";

export const GroupCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 456px;
  height: 85px;
  justify-content: space-between;
  background-color: rgba(85, 207, 224, 0.66);
  border-radius: 100px;
  font-family: Sansita;
  margin-bottom: 20px;
  margin-left: 20px;
  color: white;
  box-shadow: 5px 5px 10px 3px #00000054;

  .groupName {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
    font-size: 2rem;
  }
`;

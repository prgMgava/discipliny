import Menu from "../../Components/MenuAside";
import { Container } from "./groupsid.styles";
import GroupGrid from "../../Components/GroupIdGrid";
import MenuMobile from "../../Components/MenuMobile";
import CardMember from "../../Components/CardMember";
import ActivityCard from "../../Components/CardActivity/index";
import CardGoal from "../../Components/CardGoal";
import { useGroups } from "../../Provider/Groups/groupsCardList";
import { Redirect } from "react-router-dom";
import { useLogged } from "../../Provider/Login";

const Groupsid = () => {
  const { specificGroup } = useGroups();
  const { logged } = useLogged();
  console.log(specificGroup);

  if (!logged) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container>
        <Menu />
        <div className="cardContainer">
          <GroupGrid
            cardGoal={
              specificGroup !== undefined ? (
                specificGroup.goals.map((card) => (
                  <CardGoal
                    key={card.id}
                    name={card.title}
                    dificuldade={card.difficulty}
                    idGoal={card.id}
                  />
                ))
              ) : (
                <p>Sem metas por aqui...</p>
              )
            }
            cardMember={
              specificGroup !== undefined
                ? specificGroup.users_on_group.map((card) => (
                    <CardMember key={card.id} member={card.username} />
                  ))
                : null
            }
            CardActivity={
              specificGroup !== undefined ? (
                specificGroup.activities.map((card) => (
                  <ActivityCard key={card.id} name={card.title} />
                ))
              ) : (
                <p>Sem atividades, tudo tranquilo...</p>
              )
            }
            namegroup={specificGroup !== undefined ? specificGroup.name : null}
          ></GroupGrid>
          <MenuMobile />
        </div>
      </Container>
    </>
  );
};

export default Groupsid;

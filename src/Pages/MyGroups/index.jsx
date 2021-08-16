import { Redirect } from "react-router-dom";
import { MyGroupsWrapper } from "./myGroups";
import CardGroups from "../../Components/CardGroups";
import CardAdd from "../../Components/CardAdd";
import MenuMobile from "../../Components/MenuMobile";
import Menu from "../../Components/MenuAside/index";
import { useDisclosure } from "@chakra-ui/react";
import GroupCreateModal from "../../Components/GroupCreateModal";
import { useMyGroups } from "../../Provider/MyGroups/index";
import { useLogged } from "../../Provider/Login";

function Groups() {
  const { logged } = useLogged();

  const { myGroupsList, setMyGroupsList, createNewGroup, updateMyGroup } =
    useMyGroups();
  console.log(myGroupsList);

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!logged) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <MyGroupsWrapper className="ContHabits">
        <Menu />
        <div className="ContainerCards">
          <section>
            <header>
              <h1>Meus grupos</h1>
            </header>
            <GroupCreateModal />
            <div className="SubContainerCards">
              {myGroupsList.map((group) => (
                <CardGroups
                  key={group.id}
                  name={group.name}
                  membros={group.users_on_group}
                  idGroup={group.id}
                />
              ))}
              <CardAdd onClick={onOpen} />
            </div>
          </section>

          <MenuMobile />
        </div>
      </MyGroupsWrapper>
      <GroupCreateModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
export default Groups;

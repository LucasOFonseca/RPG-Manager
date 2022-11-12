import { NextPage } from "next";
import { CreateCharacterDialog } from "./components/CreateCharacterDialog";

const Index: NextPage = () => {
  return (
    <>
      <CreateCharacterDialog open />
    </>
  );
};

export default Index;

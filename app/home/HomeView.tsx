import React from "react";
// eslint-disable-next-line import/no-cycle
import MainDrawer from "@/components/common/Drawer/Drawer";
import MakeThemeModal from "@/components/MakeThemeModal/MakeThemeModal";
import EmptyHome from "@/components/common/EmptyHome/EmptyHome";
import HintList from "@/components/common/HintList/HintList";

import * as S from "./HomeView.styled";

export interface Theme {
  id: number;
  title: string;
  timeLimit: number;
}

type Props = {
  categories: Theme[];
};

function HomeView(props: Props) {
  const { categories } = props;

  return (
    <>
      <S.Wrapper>
        <MainDrawer {...props} />
        <S.Cont component="main">
          {categories ? <HintList /> : <EmptyHome />}
        </S.Cont>
      </S.Wrapper>
      <MakeThemeModal />;
    </>
  );
}

export default HomeView;
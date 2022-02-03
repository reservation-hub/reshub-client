import React from 'react';
import MainTemplate from '@/components/Template/MainTemplate';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PATHS } from '@/constants/paths';

const MyPage = () => {
  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <MainTemplate>
      <Switch>
        <Route exact path={PATHS.USER}>
          <div>hogehoge</div>
        </Route>
      </Switch>
    </MainTemplate>
  )
};

export default MyPage;


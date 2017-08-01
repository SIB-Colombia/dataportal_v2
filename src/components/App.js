import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';
import {
  HomePage,
  NotFoundPage,
  LoginSigninPage,
  LoginSignupPage,
  LoginRecoverPage,
  StaticPage,
  FileSummaryPage,
  FileDetailPage,
  FileSearchPage,
  UserProfilePage,
  MapPage,
  DepartmentsPage,
  TaxonomyPage,
  SearchResultsPage,
  BiologicalRecordPage,
  EntitiesListPage,
  EntitiesRecordPage,
  DatasetsListPage,
  DatasetsRecordPage,
} from 'components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './themes/default';
import style from './themes/style';
import { middleware } from '../auth';


injectGlobal`${style}`;

const App = () => {

  window.scrollTo(0, 0);

  injectGlobal`
    body{
      background: ${theme.palette.grayscale[0]};
    }
  `;

  return (
    <MuiThemeProvider>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/" component={middleware(HomePage)}/> */}
          <Route exact path="/login/signin" component={LoginSigninPage} />
          <Route exact path="/login/signup" component={LoginSignupPage} />
          <Route exact path="/login/recover" component={LoginRecoverPage} />
          <Route exact path="/static/about" component={StaticPage} />
          <Route exact path="/file/summary/:id" component={FileSummaryPage} />
          <Route exact path="/file/detail/:id" component={FileDetailPage} />
          <Route exact path="/file/search" component={FileSearchPage} />
          <Route exact path="/user/profile" component={UserProfilePage} />
          <Route exact path="/map" component={MapPage} />

          <Route exact path="/departments/:depart?" component={DepartmentsPage} />
          {/* <Route exact path="/search" component={SearchPage} />*/}
          <Route exact path="/taxonomy" component={TaxonomyPage} />

          <Route exact path="/search/:tab?" component={SearchResultsPage} />
          <Route exact path="/occurrence/:id" component={BiologicalRecordPage} />
          <Route exact path="/provider" component={EntitiesListPage} />
          <Route exact path="/provider/:id" component={EntitiesRecordPage} />
          <Route exact path="/datasets" component={DatasetsListPage} />
          <Route exact path="/datasets/:id" component={DatasetsRecordPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </MuiThemeProvider>

  )
}

export default App;

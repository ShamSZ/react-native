import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

export default function RouterComponent() {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth" initial>
          <Scene
            key="login"
            component={LoginForm}
            title="Please log in"
          />
        </Scene>

        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            title="Employees"
            initial
          />

          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="New Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
}

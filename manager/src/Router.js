import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

export default function RouterComponent() {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please log in"
            initial
          />
        </Scene>

        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            rightTitle="Add"
            onRight={() => console.log('right!')}
            title="Employees"
          />
        </Scene>
      </Scene>
    </Router>
  );
}

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

export default function RouterComponent() {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login"
          component={LoginForm}
          title="Please log in"
          initial
        />
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
        />
      </Scene>
    </Router>
  );
}

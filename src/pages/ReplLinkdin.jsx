import { data } from 'data/users';
import { Component } from 'react';
import { UsersList } from './UsersList/UsersList';
import { Button } from './Button/Button';
import { AddUserForm } from './AddUserForm/AddUserForm';
import { nanoid } from 'nanoid';
// npm i nanoid
// npm i
export class replLinkdin extends Component {
  state = {
    users: [...data],
    isFormShown: false,
  };

  deleteUser = id => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== id),
    }));
  };

  openForm = () => {
    this.setState({ isFormShown: true });
  };

  addUser = obj => {
    const newUser = {
      id: nanoid(),
      ...obj,
    };
    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      isFormShown: false,
    }));
  };

  toggleStatus = id => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        if (user.id !== id) {
          return user;
        } else {
          return { ...user, hasJob: !user.hasJob };
        }
      }),
    }));
  };

  render() {
    const { users, isFormShown } = this.state;
    return (
      <>
        <UsersList
          users={users}
          deleteUser={this.deleteUser}
          toggleHasJob={this.toggleStatus}
        />
        {isFormShown ? (
          <AddUserForm addUser={this.addUser} />
        ) : (
          <Button text="Add user" clickHandler={this.openForm} />
        )}
      </>
    );
  }
}

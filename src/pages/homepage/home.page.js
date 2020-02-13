import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './home.page.scss';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodos } from '../../services';

export default function HomePage(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error, todos } = useSelector(state => state.todosReducer);

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <div className="homePage">
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => {
          return <li key={todo.title}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
}

HomePage.defaultProps = {};

HomePage.propTypes = {};

import React from 'react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import Card from '../commons/Card';

const Grid = (props) => {
  const { type } = useParams();
  const collection = props[type];
  return (
    <div className="columns is-multiline layout">
      {collection.map((data, i) => (
        <div className="column is-4" key={i}>
          <Link to={`/single/${type}/${data.id}`}>
            <Card data={data} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Grid;

import './task2.scss';
import PropTypes from 'prop-types';

function Task2({ title, main }) {
  const elements = document.querySelectorAll('.item2');
  elements.forEach(e => {
    color(e);
  });

  function color(e) {
    e.style =
      'background-color:  #' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  }
  return (
    <div>
      <section className="statistics2">
        <h2 className="title2">{title}</h2>

        <ul className="stat-list">
          {main.map(e => (
            <li className="item2" key={e.id}>
              <span className="label2">{e.label}</span>
              <span className="percentage2">{e.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Task2.propTypes = {
  title: PropTypes.string,
  main: PropTypes.object,
};

export default Task2;

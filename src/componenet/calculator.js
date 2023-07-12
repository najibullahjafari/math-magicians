import '../css/calculator.css';

function MyComponent() {
  return (
    <div className="cal-container">
      <div className="cal-screen">0</div>
      <button className="cal-batn" type="button">
        AC
      </button>
      <button className="cal-batn" type="button">
        +/-
      </button>
      <button className="cal-batn" type="button">
        %
      </button>
      <button className="cal-batn" type="button">
        /
      </button>
      <button className="cal-batn" type="button">
        7
      </button>
      <button className="cal-batn" type="button">
        8
      </button>
      <button className="cal-batn" type="button">
        9
      </button>
      <button className="cal-batn" type="button">
        *
      </button>
      <button className="cal-batn" type="button">
        4
      </button>
      <button className="cal-batn" type="button">
        5
      </button>
      <button className="cal-batn" type="button">
        6
      </button>
      <button className="cal-batn" type="button">
        -
      </button>
      <button className="cal-batn" type="button">
        1
      </button>
      <button className="cal-batn" type="button">
        2
      </button>
      <button className="cal-batn" type="button">
        3
      </button>
      <button className="cal-batn" type="button">
        +
      </button>
      <button className="cal-batn cal-batn-zero" type="button">
        0
      </button>
      <button className="cal-batn" type="button">
        .
      </button>
      <button className="cal-batn " type="button">
        =
      </button>
    </div>
  );
}

export default MyComponent;

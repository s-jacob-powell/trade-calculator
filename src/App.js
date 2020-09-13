import React from 'react';
import './App.css';

function App() {
  // Constants
  const f = .0012

  // Inputs
  const [p, setp] = React.useState(10000)
  const [b, setb] = React.useState(.002)
  const [i, seti] = React.useState(30)
  const [w, setw] = React.useState(.01)

  // Calculated
  const [m, setm] = React.useState(0)

  const [bu, setbu] = React.useState(0)
  const [bbf, setbbf] = React.useState(0)
  const [buf, setbuf] = React.useState(0)

  const [n, setn] = React.useState(0)
  const [s, sets] = React.useState(0)
  const [t, sett] = React.useState(0)

  const [sb, setsb] = React.useState(0)
  const [sbf, setsbf] = React.useState(0)
  const [suf, setsuf] = React.useState(0)

  const [d, setd] = React.useState(0)
  const [c, setc] = React.useState(0)

  const [r, setr] = React.useState(0)

  const [yb, setyb] = React.useState(0)
  const [yi, setyi] = React.useState(0)
  const [yd, setyd] = React.useState(0)
  const [yc, setyc] = React.useState(0)

  // Calculations
  const calculate = () => {
    if(isNaN(b) || isNaN(p) || isNaN(i) || isNaN(w)) {
      setm('-')
      setbu('-')
      setbbf('-')
      setbuf('-')
      setn('-')
      sets('-')
      sett('-')
      setsb('-')
      setsbf('-')
      setsuf('-')
      setd('-')
      setc('-')
      setr('-')
      setyb('-')
      setyi('-')
      setyd('-')
      setyc('-')
      return
    }

    const newb = parseFloat(b)
    const newp = parseFloat(p)
    const newi = parseFloat(i)
    const neww = parseFloat(w)

    const newm = newb - (newb * f)
    const newbu = newp * newb
    const newbbf = newb - newm
    const newbuf = newp * newbbf
    const newn = newp + newi
    const news = newm * newn
    const newsbf = newm * f
    const newsb = newm - newsbf
    const newsuf = news * f
    const newt = news - newsuf
    const newd = newn / newp
    const newc = (newd - 1.0) * 100

    const newr =
      newb * newi -
      (2.0 * newb * newp * f) -
      (2.0 * newb * newi * f) +
      (newb * newp * f * f) +
      (newb * newi * f * f)

    const newyb =
      neww / (newi - (2.0 * newp * f) -
      (2.0 * newi * f) +
      (newp * f * f) +
      (newi * f * f))
    const newyi =
      (neww + (2.0 * newb * newp * f) - (newb * newp * f * f)) /
      (newb - (2.0 * newb * f) + (newb * f * f))
    const newyd = (newp + newyi) / newp
    const newyc = (newyd - 1.0) * 100

    setm(newm.toFixed(8) + " BTC")
    setbu("$" + newbu.toFixed(2))
    setbbf(newbbf.toFixed(8) + " BTC")
    setbuf("$" + newbuf.toFixed(2))
    setn("$" + newn.toFixed(2))
    sets("$" + news.toFixed(2))
    sett("$" + newt.toFixed(2))
    setsb(newsb.toFixed(8) + " BTC")
    setsbf(newsbf.toFixed(8) + " BTC")
    setsuf("$" + newsuf.toFixed(2))
    setd(newd.toFixed(8))
    setc(newc.toFixed(2) + "%")

    setr("$" + newr.toFixed(2))

    setyb(newyb.toFixed(8) + " BTC")
    setyi("$" + newyi.toFixed(2))
    setyd(newyd.toFixed(8))
    setyc(newyc.toFixed(2) + "%")
  }

  React.useEffect(calculate, [p, b, i, w])

  // Components
  const ValueComponent = (props) => {
    return (
      <div className="ValueComponent">
        <h2 className="ValueLabel">{props.label}</h2>
        <h2 className="Value">{props.value}</h2>
      </div>
    );
  }

  // Layout
  return (
    <div className="App">
      <h1 className="Title">Trade Calculator</h1>
      <div className="Content">
        <div className="Left">
          <div className="Top">
            <div className="Cell">
              <div className="InputComponent">
                <h2 className="InputLabel">Price (p)</h2>
                <input className="Input" onChange={(e) => setp(e.target.value)} value={p}/>
              </div>
              <div className="InputComponent">
                <h2 className="InputLabel">Buy (b)</h2>
                <input className="Input" onChange={(e) => setb(e.target.value)} value={b}/>
              </div>
            </div>
            <div className="Cell">
              <ValueComponent label="Receive (m)" value={m}/>
              <ValueComponent label="Receive (bu)" value={bu}/>
            </div>
            <div className="Cell">
              <ValueComponent label="Fee (bbf)" value={bbf}/>
              <ValueComponent label="Fee (buf)" value={buf}/>
            </div>
          </div>
          <div className="Middle">
            <div className="Cell">
              <div className="InputComponent">
                <h2 className="InputLabel">Increase (i)</h2>
                <input className="Input" onChange={(e) => seti(e.target.value)} value={i}/>
              </div>
            </div>
            <div className="Cell">
              <ValueComponent label="Change (c)" value={c}/>
              <ValueComponent label="Multiplier (d)" value={d}/>
            </div>
          </div>
          <div className="Bottom">
            <div className="Cell">
              <ValueComponent label="New Price (n)" value={n}/>
              <ValueComponent label="Sell (s)" value={s}/>
            </div>
            <div className="Cell">
              <ValueComponent label="Receive (t)" value={t}/>
              <ValueComponent label="Receive (sb)" value={sb}/>
            </div>
            <div className="Cell">
              <ValueComponent label="Fee (suf)" value={suf}/>
              <ValueComponent label="Fee (sbf)" value={sbf}/>
            </div>
          </div>
        </div>
        <div className="Right">
          <div className="Top">
            <div className="Cell">
              <ValueComponent label="Fee (f)" value={f}/>
              <div className="InputComponent">
                <h2 className="InputLabel">Wanted Return (w)</h2>
                <input className="Input" onChange={(e) => setw(e.target.value)} value={w}/>
              </div>
              <ValueComponent label="Needed b (yb)" value={yb}/>
            </div>
          </div>
          <div className="Middle">
            <div className="Cell">
              <ValueComponent label="Needed i (yi)" value={yi}/>
            </div>
            <div className="Cell">
              <ValueComponent label="Needed change (yc)" value={yc}/>
              <ValueComponent label="Needed multiplier (yd)" value={yd}/>
            </div>
          </div>
          <div className="Bottom">
            <div className="Cell">
              <ValueComponent label="Return (r)" value={r}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

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
    const newm = b - (b * f)
    const newbu = p * b
    const newbbf = b - newm
    const newbuf = p * newbbf
    const newn = p + i
    const news = newm * newn
    const newsbf = newm * f
    const newsb = newm - newsbf
    const newsuf = news * f
    const newt = news - newsbf
    const newd = newn / p
    const newc = (newd - 1.0) * 100

    const newr = b * i - (2.0 * b * p * f) - (2.0 * b * i * f) + (b * p * f * f) + (b * i * f * f)

    const newyb = w / (i - (2.0 * p * f) - (2.0 * i * f) + (p * f * f) + (i * f * f))
    const newyi = (w + (2.0 * b * p * f) - (b * p * f * f)) / (b - (2.0 * b * f) + (b * f * f))
    const newyd = (p + newyi) / p
    const newyc = (newyd - 1.0) * 100

    setm(newm.toFixed(8))
    setbu(newbu.toFixed(2))
    setbbf(newbbf.toFixed(8))
    setbuf(newbuf.toFixed(2))
    setn(newn.toFixed(2))
    sets(news.toFixed(2))
    sett(newt.toFixed(2))
    setsb(newsb.toFixed(8))
    setsbf(newsbf.toFixed(8))
    setsuf(newsuf.toFixed(2))
    setd(newd.toFixed(8))
    setc(newc.toFixed(2))

    setr(newr.toFixed(2))

    setyb(newyb.toFixed(8))
    setyi(newyi.toFixed(2))
    setyd(newyd.toFixed(8))
    setyc(newyc.toFixed(2))
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

      <div className="InputComponent">
        <h2 className="InputLabel">Price (p)</h2>
        <input className="Input" onChange={(e) => setp(e.target.value)} value={p}/>
      </div>
      <div className="InputComponent">
        <h2 className="InputLabel">Buy BTC (b)</h2>
        <input className="Input" onChange={(e) => setb(e.target.value)} value={b}/>
      </div>
      <div className="InputComponent">
        <h2 className="InputLabel">Increase (i)</h2>
        <input className="Input" onChange={(e) => seti(e.target.value)} value={i}/>
      </div>
      <div className="InputComponent">
        <h2 className="InputLabel">Wanted Return (w)</h2>
        <input className="Input" onChange={(e) => setw(e.target.value)} value={w}/>
      </div>

      <ValueComponent label="Fee (f)" value={f}/>
      <ValueComponent label="Buy BTC AF (m)" value={m}/>
      <ValueComponent label="USD (bu)" value={bu}/>
      <ValueComponent label="BTC Buy Fee (bbf)" value={bbf}/>
      <ValueComponent label="USD Buy Fee (buf)" value={buf}/>
      <ValueComponent label="New Price (n)" value={n}/>
      <ValueComponent label="Sell USD (s)" value={s}/>
      <ValueComponent label="USD AF (t)" value={t}/>
      <ValueComponent label="Sell BTC AF (sb)" value={sb}/>
      <ValueComponent label="Sell BTC Fee (sbf)" value={sbf}/>
      <ValueComponent label="Sell USD Fee (suf)" value={suf}/>
      <ValueComponent label="Percent Change (c)" value={c}/>
      <ValueComponent label="Multiplier (d)" value={d}/>
      <ValueComponent label="B to make W (yb)" value={yb}/>
      <ValueComponent label="I from B to make W (yi)" value={yi}/>
      <ValueComponent label="Return (r)" value={r}/>
      <ValueComponent label="C from B to make W (yc)" value={yc}/>
      <ValueComponent label="D from B to make W (yd)" value={yd}/>
    </div>
  );
}

export default App;

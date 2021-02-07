import './App.css';
import Button from '@material-ui/core/Button';
import * as React from 'react';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // configs
      interestRor: 0.03,
      fundRor: 0.2,
      otherInvestmentRor: 0.08,
      currentSalary: 10000,
      currentBonusMonths: 0,
      salaryIncreasePerYear: 0.15,
    }
  }

  discountFuture(years, nr = undefined) {
    console.log(this)
    return money => money / Math.pow(1 + (nr || this.state.interestRor), years)
  }

  render() {
    return <Button variant="contained">{this.discountFuture(3)(10000)}</Button>;
  }

}

export default App;

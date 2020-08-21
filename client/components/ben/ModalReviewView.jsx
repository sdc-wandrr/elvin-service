import React from 'react';
import ModalReview from './ModalReview.jsx';
import style from './css/modalview.module.css';
import LeftArrow from './svg/chevron-left-solid.svg';
import RightArrow from './svg/chevron-right-solid.svg';

class ModalReviewView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
    };
  }

  handleNumClick(e) {
    let i = e.currentTarget.dataset.div_id;
    i = i * 10 - 10;
    this.setState({
      idx: i,
    });
  }

  handleFirstClick(e) {
    this.setState({
      idx: 0,
    });
  }

  handleLastClick(e) {
    let i = e.currentTarget.dataset.div_id;
    i *= 10;
    this.setState({
      idx: i,
    });
  }

  handleLeftClick(e) {
    let i;
    this.state.idx !== 0 ? i = this.state.idx - 10 : i = 0;
    this.setState({
      idx: i,
    });
  }

  handleRightClick(e) {
    let max = e.currentTarget.dataset.div_id;
    max *= 10;
    let i;
    this.state.idx !== max ? i = this.state.idx + 10 : i = max;
    this.setState({
      idx: i,
    });
  }

  render() {
    const i = this.state.idx;
    const displayedReviews = this.props.reviews.slice(i, i + 10);
    const pages = Math.ceil(this.props.reviews.length / 10);
    const pagesArray = Array.from(Array(pages), (x, index) => index + 1);
    const lastIdx = pagesArray.length - 1;
    const numIdx = (i + 10) / 10;
    return (
      <div className={style.reviewbox}>
        <div>
          {displayedReviews.map((review) => <ModalReview review={review} />)}
        </div>
        <div className={style.selection}>
          <div className={style.numword} onClick={this.handleFirstClick.bind(this)}>First</div>
          <div className={style.arrow} onClick={this.handleLeftClick.bind(this)}>
            <LeftArrow height={14} width={14} />
          </div>
          <div style={{ display: 'flex' }}>
            {pagesArray.map((num) => <div data-div_id={num} onClick={this.handleNumClick.bind(this)} className={num === numIdx ? style.selected : style.pageselector}>{num}</div>)}
          </div>
          <div className={style.arrow} onClick={this.handleRightClick.bind(this)} data-div_id={lastIdx}>
            <RightArrow height={14} width={14} />
          </div>
          <div
            className={style.numword}
            data-div_id={lastIdx}
            onClick={this.handleLastClick.bind(this)}
          >
            Last
          </div>
        </div>
      </div>
    );
  }
}

export default ModalReviewView;

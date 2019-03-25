import React from 'react';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  WindowScroller
} from 'react-virtualized';
import BottomScrollListener from 'react-bottom-scroll-listener';
import LazyLoad from 'react-lazy-load';

import CharacterCard from '../CharacterCard';

class Collection extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      columnWidth: Math.floor(window.screen.width / 3.5),
      height: Math.floor(window.screen.height - 50),
      gutterSize: 30,
      overscanByPixels: 0,
      windowScrollerEnabled: true
    };
    this.cache = new CellMeasurerCache({
      defaultHeight: 250,
      defaultWidth: 200,
      fixedWidth: true
    });
    this.columnCount = 0;
  }

  componentDidMount = () => {};

  handleOnScroll = () => {};

  calculateColumnCount = () => {
    const { columnWidth, gutterSize } = this.state;

    this.columnCount = Math.floor(this.width / (columnWidth + gutterSize));
  };

  cellRenderer = ({ index, key, parent, style }) => {
    const { list } = this.props;
    const { columnWidth } = this.state;

    const character = list[index];
    const rowHeight = 200;
    const containerStyle = {
      ...style,
      height: rowHeight,
      width: columnWidth
    };

    return (
      <CellMeasurer cache={this.cache} index={index} key={key} parent={parent}>
        <div style={containerStyle}>
          <LazyLoad height={rowHeight}>
            <CharacterCard {...character} />
          </LazyLoad>
        </div>
      </CellMeasurer>
    );
  };

  initCellPositioner = () => {
    if (typeof this.cellPositioner === 'undefined') {
      const { columnWidth, gutterSize } = this.state;

      this.cellPositioner = createMasonryCellPositioner({
        cellMeasurerCache: this.cache,
        columnCount: this.columnCount,
        columnWidth,
        spacer: gutterSize
      });
    }
  };

  onResize = ({ width }) => {
    this.width = width;

    this.calculateColumnCount();
    this.resetCellPositioner();
    this.masonry.recomputeCellPositions();
  };

  renderAutoSizer = ({ height, scrollTop }) => {
    this.height = height;
    this.scrollTop = scrollTop;

    const { overscanByPixels } = this.state;

    return (
      <AutoSizer
        disableHeight
        height={height}
        onResize={this.onResize}
        overscanByPixels={overscanByPixels}
        scrollTop={this.scrollTop}
      >
        {this.renderMasonry}
      </AutoSizer>
    );
  };

  renderMasonry = ({ width }) => {
    this.width = width;

    this.calculateColumnCount();
    this.initCellPositioner();

    const { height, overscanByPixels, windowScrollerEnabled } = this.state;

    return (
      <Masonry
        autoHeight={windowScrollerEnabled}
        cellCount={this.props.list.length}
        cellMeasurerCache={this.cache}
        cellPositioner={this.cellPositioner}
        cellRenderer={this.cellRenderer}
        height={height}
        overscanByPixels={overscanByPixels}
        ref={this.setMasonryRef}
        scrollTop={this.scrollTop}
        width={width}
      />
    );
  };

  resetCellPositioner = () => {
    const { columnWidth, gutterSize } = this.state;

    this.cellPositioner.reset({
      columnCount: this.columnCount,
      columnWidth,
      spacer: gutterSize
    });
  };

  setMasonryRef = ref => {
    this.masonry = ref;
  };

  render() {
    const { overscanByPixels } = this.state;
    const { onBottom } = this.props;

    return (
      <>
        <BottomScrollListener onBottom={onBottom} offset={100} />
        <WindowScroller overscanByPixels={overscanByPixels}>
          {this.renderAutoSizer}
        </WindowScroller>
      </>
    );
  }
}

export default Collection;

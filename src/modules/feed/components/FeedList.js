import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { CardSeparator, FeedCard } from './';

const renderItem = (color) => {
  return ({ item }) =>
    <FeedCard
      title={item.title}
      category={item.category}
      readingTime={item.readingTime}
      level={item.level}
      image={item.image}
      body={item.body}
      color={color}
    />;
};

export class FeedList extends Component {
  render() {
    const { list, onEndReached, color } = this.props;
    return (
      <View style={{ flex: 1 }} >
        <FlatList
          renderItem={renderItem(color)}
          data={list}
          keyExtractor={(item, index) => item + index}
          onEndReached={() => onEndReached(list)}
          onEndThreshold={10}
          ItemSeparatorComponent={() => <CardSeparator />}
        />
      </View>
    );
  }
}

FeedList.propTypes = {
  color: PropTypes.string,
  onEndReached: PropTypes.func,
  list: PropTypes.array
};

FeedList.defaultProps = {
  color: '#FFFFFF',
  onEndReached: () => { },
  list: []
};

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './MobilePage'
import ListItem from './ListItem'
import Title from './Title'
import Text from './Text'
import { borderRadius } from './variables'

const styles = {
    wrapper: {
        borderTop: '1px solid #ddd',
        borderBottom: '1px solid #ddd',
        borderLeft: '1px solid #ddd',
        borderRight: '1px solid #ddd',
        borderRadius,
    },
    item: {
        borderBottom: '1px solid #ddd',
    },
    firstItem: {},
    lastItem: {
        borderBottom: 'none',
    },
}

const getItemStyle = (items, item, index) => {
    if (index === 0) {
        return {
            ...styles.item,
            ...styles.firstItem,
        }
    }

    if (index === items.length - 1) {
        return {
            ...styles.item,
            ...styles.lastItem,
        }
    }

    return styles.item
}

const List = ({ keyProp, titleProp, subtitleProp, items, renderItem, onDisclose }) => (
    <ThemeContext.Consumer>
        {theme => (
            <div style={styles.wrapper}>
                {items.map((item, index) => (
                    renderItem ? (
                        <div
                            key={item[keyProp]}
                            style={getItemStyle(items, item, index)}
                            onDisclose={() => onDisclose(item)}
                        >
                            renderItem(item)
                        </div>
                    ) : (
                        <div
                            key={item[keyProp]}
                            style={getItemStyle(items, item, index)}
                        >
                            <ListItem
                                isActive={item.isActive}
                                onDisclose={onDisclose ? () => onDisclose(item) : null}
                            >
                                {subtitleProp ? <Title>{item[titleProp]}</Title> : item[titleProp]}
                                {subtitleProp ? <Text>{item[subtitleProp]}</Text> : null}
                            </ListItem>
                        </div>
                    )
                ))}
            </div>
        )}
    </ThemeContext.Consumer>
)

List.propTypes = {
    keyProp: PropTypes.string,
    titleProp: PropTypes.string,
    subtitleProp: PropTypes.string,
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func,
    onDisclose: PropTypes.func,
}

List.defaultProps = {
    keyProp: 'id',
    titleProp: 'title',
    subtitleProp: null,
    renderItem: null,
    onDisclose: null,
}

List.Item = ListItem

export default List

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './MobilePage'
import ListItem from './ListItem'

const styles = {
    wrapper: {
        borderTop: '1px solid #ddd',
        borderBottom: '1px solid #ddd',
        borderLeft: '1px solid #ddd',
        borderRight: '1px solid #ddd',
        borderRadius: 5,
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

const List = ({ keyProp, titleProp, items, renderItem, onDisclose }) => (
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
                                onDisclose={() => onDisclose(item)}
                            >
                                {item[titleProp]}
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
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func,
    onDisclose: PropTypes.func,
}

List.defaultProps = {
    keyProp: 'id',
    titleProp: 'title',
    renderItem: null,
    onDisclose: () => {},
}

List.Item = ListItem

export default List

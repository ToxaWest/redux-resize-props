import PropTypes from "prop-types";

const config = [{
    width: PropTypes.number,
    mode: PropTypes.string
}];

/**
 * @param [config] - config width options {width: breakpoint, mode: breakpoint name}
 * @returns string - current size mode.
 */

const getCurrent = (config) => {
    const width = window.innerWidth;
    let mode = 'desktop';
    config.sort((a, b) => a.width < b.width ? 1 : -1);
    config.forEach(item => {
        if (item.width >= width) {
            mode = item.mode
        }
    });
    return mode;
};

getCurrent.PropTypes = {config};

const defaultConfig = [{
    mode: 'mobile',
    width: 575
}, {
    mode: 'tablet',
    width: 1024
}];

/**
 *
 * @param windowSize
 * @returns {{windowSize: string, type: string}}
 * @constructor
 */
const ResizeAction = (windowSize) => ({
    type: 'resize',
    windowSize
});

/**
 * Send dispatch event on breakpoint change.
 *
 * @param dispatch
 * @param config
 * @constructor
 */

const Resize = (dispatch, config) => {
    const media = config ? config : defaultConfig;
    let name = getCurrent(media);
    dispatch(ResizeAction(name));
    window.addEventListener('resize', ev => {
        const currentWidth = getCurrent(media);
        if (currentWidth !== name) {
            name = currentWidth;
            dispatch(ResizeAction(currentWidth))
        }
    })
};

Resize.propTypes = {
    dispatch: PropTypes.func.isRequired,
    config
};

const ResizeReducer = (state = {windowSize: ''}, action) => {
    const {type, windowSize} = action;
    switch (type) {
        case 'resize':
            return {
                ...state,
                ...{windowSize}
            };
        default:
            return state
    }
};

export {ResizeReducer, Resize}
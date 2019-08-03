import PropTypes from "prop-types";

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
const defaultConfig = [{
    mode: 'mobile',
    width: 575
}, {
    mode: 'tablet',
    width: 1024
}];

const Resize = (ResizeAction, config) => {
    const media = config ? config : defaultConfig;
    let name = getCurrent(media);
    ResizeAction(name);
    window.addEventListener('resize', ev => {
        const currentWidth = getCurrent(media);
        if (currentWidth !== name) {
            name = currentWidth;
            ResizeAction(currentWidth)
        }
    })
};

Resize.propTypes = {
    ResizeAction: PropTypes.func.isRequired,
    config: [{
        width: PropTypes.number,
        mode: PropTypes.string
    }]
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

const ResizeAction = (windowSize) => ({
    type: 'resize',
    windowSize
});

const ResizeDispatcher = (dispatch, size) => {
    dispatch(ResizeAction(size))
};

export {ResizeReducer, Resize, ResizeDispatcher}
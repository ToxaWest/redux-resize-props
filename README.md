#Redux props resize.
###Update redux store on device resize. Only on mode change.

##How to use
#### 1) Add module to project.
    npm i --save redux-resize-props
#### 2) Import and add `ResizeReducer` to your `combineReducers` method
#####Example:
    import {ResizeReducer} from "redux-resize-props"
    
    const combinedReducers = combineReducers({ 
            ResizeReducer 
        })

#### 3) Add dispatch event to your main component, and init (ex. App.js)
#####Import:
`import {Resize, ResizeDispatcher} from "redux-resize-props"`
#####Init method in component constructor
    constructor(props) {
        super(props);
        new Resize(props.ResizeAction)
    }
#####Add dispatcher
    const mapDispatchToProps = dispatch => ({
         ResizeAction: (size) => {
             ResizeDispatcher(dispatch, size)
         }
     });
     App = connect(null, mapDispatchToProps)(App);
###Now you have props with window size mode in all connected components
####Example
    const mapStateToProps = state => ({
        windowSize: state.ResizeReducer.windowSize
    });
    Foo = connect(mapStateToProps)(Foo);
after this your can get mode using `this.props.windowSize`
##Options
### Default options
    mobile <= 575
    tablet > 575 && <= 1024
    desktop > 1024`
### You can add custom params to init method
####Example
    constructor(props) {
        super(props);
        const config = [{
                            mode: 'mobile-xs',
                            width: 320
                        },{
                            mode: 'mobile',
                            width: 575
                        }, {
                            mode: 'tablet',
                            width: 1024
                        }]

        new Resize(props.ResizeAction, config)
    }                 
                    
###! Important. 
1 ) `desktop` is default value using after all breakpoints
2 ) Props changes only if breakpoints change.
3 ) Do not init `new Resize(props.ResizeAction)` in all components. Only in main.
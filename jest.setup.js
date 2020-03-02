window.React = require("react");
window.ReactDOM = require("react-dom");
window.useState = window.React.useState;
window.useEffect = window.React.useEffect;
window.useContext = window.React.useContext;
window.useReducer = window.React.useReducer;
window.useCallback = window.React.useCallback;
window.useMemo = window.React.useMemo;
window.useRef = window.React.useRef;
window.useImperativeHandle = window.React.useImperativeHandle;
window.useLayoutEffect = window.React.useLayoutEffect;
window.useDebugValue = window.React.useDebugValue;

window.enzyme = require("enzyme");
window.shallow = window.enzyme.shallow;
window.enzyme.configure({ adapter: new (require("enzyme-adapter-react-16")) });
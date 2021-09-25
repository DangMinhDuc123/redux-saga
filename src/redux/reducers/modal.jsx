// const initialState = {
//     showModal: false,
//     title: '',
//     component: null,
// };

// const reducerModal = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SHOW_MODAL': {
//             return {
//                 ...state,
//                 showModal: true
//             };
//         }
//         case 'HIDE_MODAL': {
//             return {
//                 ...state,
//                 showModal: false
//             };
//         }
//         case 'CHANGE_MODAL_TITLE': {
//             const { title } = action.payload;
//             return {
//                 ...state,
//                 title
//             };
//         }
//         case 'CHANGE_MODAL_CONTENT': {
//             const { component } = action.payload;
//             return {
//                 ...state,
//                 component
//             };
//         }
//         default:
//             return state;
//     }
// }

// export default reducerModal;
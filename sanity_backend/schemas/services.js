export default {
    name:'services',
    title:'Services',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'description',
            title:'Description',
            type:'string'
        }
    ]
}

// export default{
//     name:'services',
//     title:'Services',
//     type: 'document',
//     fields:[
//         {
//             name:'title',
//             title:'Title',
//             type:'string'
//         },
//         {
//             name:'description',
//             title:'Description',
//             type:'string'
//         },
//         {
//             name:'imgUrl',
//             title:'ImgUrl',
//             type: 'image',
//             options: {
//               hotspot: true,
//             },
//         },
        
//     ]
// }
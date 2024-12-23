const initialState = {
    works: [
      {
        id: 1,
        title: "Designing Dashboards",
        year: 2020,
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        image: "/serv1.png"
      },
      {
        id: 2,
        title: "Vibrant Portraits of 2020",
        year: 2018,
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        image: "/serv2.png"
      },
      {
        id: 3,
        title: "36 Days of Malayalam type",
        year: 2018,
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        image: "/serv3.png"
      }
    ]
  };
  
  const workReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default workReducer;
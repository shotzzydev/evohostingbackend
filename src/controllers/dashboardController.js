class dashboardController {
  dashboardGet (req, res) {
    res.render('dashboard', {
      user_name: "Shotzzy",
      user_id: "",
      user_github: "",
      user_plan_name: "",
      user_plan_memory: "",
      user_plan_expired: "",
  });
}}

export default new dashboardController;

const controller = {};

controller.list = (req,res)=>{
  req.getConnection((err,conn)=>{
    conn.query('select * from customer',(err,customers)=>{
      if(err){
        res.json(err);
      }
      //console.log(customers);
      res.render('customers',{
        data:customers
      });
    });
  });
};

controller.add = (req,res)=>{
  /*const name = req.body.name;
  const address = req.body.address;
  const phone = req.body.phone;*/
  const data = req.body;
  req.getConnection((err,conn)=>{
    conn.query('insert into customer set ?',[data],(err,customer)=>{
      console.log(customer);
      res.redirect('/');
    });
  });
}

module.exports = controller;

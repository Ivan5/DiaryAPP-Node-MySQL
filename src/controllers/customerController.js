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
controller.edit = (req,res)=>{
  const id = req.params.id;
  req.getConnection((err,conn)=>{
    conn.query('select * from customer where id = ?',[id],(err,customer)=>{
      res.render('customer_edit',{
        data:customer[0]
      })
    })
  })
}

controller.update = (req,res)=>{
    const id = req.params.id;
    /*const name = req.body.name;
    const address = req.body.address;
    const phone = req.body.phone;*/
    const newCustomer = req.body;

    req.getConnection((err,conn)=>{
      conn.query('update customer set ? where id = ?',[newCustomer,id],(err,rows)=>{
        res.redirect('/');
      })
    })
}

controller.delete = (req,res)=>{
  const id = req.params.id;
  req.getConnection((err,conn)=>{
    conn.query('delete from customer where id = ?',[id],(err,rows)=>{
      if(err){
        console.log(err);
        return;
      }
      res.redirect('/');

    })
  })
}

module.exports = controller;

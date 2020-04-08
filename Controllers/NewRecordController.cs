using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication5.Models;

namespace WebApplication5.Controllers 
{
    public class NewRecordController : Controller
    {
        private readonly ConnectionStringClass _cc;

        public NewRecordController(ConnectionStringClass cc)
        {
            _cc = cc;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Create(EmpClass ec)
        {
            _cc.Add(ec);
            _cc.SaveChanges();
          //  ViewBag.message = "REcord" + ec.Name + "Is sucess";
            return View();
        }
    }
}
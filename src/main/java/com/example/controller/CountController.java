package com.example.controller;

import com.example.bean.OrderInfo;
import com.example.service.CountService;
import com.example.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/count")
public class CountController extends GenericController{
    private static final Logger logger = LoggerFactory.getLogger(CountController.class);

    @Autowired
    private CountService countService;

    @RequestMapping(value = "/cost",method = RequestMethod.POST)
    public void getCost( HttpServletRequest request, HttpServletResponse response) {
        String datefrom =request.getParameter("datefrom");
        String dateto =request.getParameter("dateto");
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("datefrom",datefrom);
        param.put("dateto",dateto);
        List<Map<String, Object>> listMap = countService.getCost(param);
        renderSuccessString(response,listMap,"操作成功");
    }

    @RequestMapping(value = "/costSum",method = RequestMethod.POST)
    public void getCostSum( HttpServletRequest request, HttpServletResponse response) {
        String datefrom =request.getParameter("datefrom");
        String dateto =request.getParameter("dateto");
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("datefrom",datefrom);
        param.put("dateto",dateto);
        List<Map<String, Object>> listMap = countService.getCostSum(param);
        renderSuccessString(response,listMap,"操作成功");
    }

    @RequestMapping(value = "/income",method = RequestMethod.POST)
    public void getIncome( HttpServletRequest request, HttpServletResponse response) {
        String datefrom =request.getParameter("datefrom");
        String dateto =request.getParameter("dateto");
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("datefrom",datefrom);
        param.put("dateto",dateto);
        List<Map<String, Object>> listMap = countService.getIncome(param);
        renderSuccessString(response,listMap,"操作成功");
    }

    @RequestMapping(value = "/incomeSum",method = RequestMethod.POST)
    public void getIncomeSum( HttpServletRequest request, HttpServletResponse response) {
        String datefrom =request.getParameter("datefrom");
        String dateto =request.getParameter("dateto");
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("datefrom",datefrom);
        param.put("dateto",dateto);
        List<Map<String, Object>> listMap = countService.getIncomeSum(param);
        renderSuccessString(response,listMap,"操作成功");
    }

    @RequestMapping(value = "/profits",method = RequestMethod.POST)
    public void getProfits( HttpServletRequest request, HttpServletResponse response) {
        String datefrom =request.getParameter("datefrom");
        String dateto =request.getParameter("dateto");
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("datefrom",datefrom);
        param.put("dateto",dateto);
        List<Map<String, Object>> listMap = countService.getProfits(param);
        renderSuccessString(response,listMap,"操作成功");
    }

    @RequestMapping(value = "/profitsSum",method = RequestMethod.POST)
    public void getProfitsSum( HttpServletRequest request, HttpServletResponse response) {
        String datefrom =request.getParameter("datefrom");
        String dateto =request.getParameter("dateto");
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("datefrom",datefrom);
        param.put("dateto",dateto);
        List<Map<String, Object>> listMap = countService.getProfitsSum(param);
        renderSuccessString(response,listMap,"操作成功");
    }
}
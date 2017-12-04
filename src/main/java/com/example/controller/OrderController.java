package com.example.controller;

import com.example.bean.OrderInfo;
import com.example.req.OrderInfoComplete;
import com.example.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping(value = "/order")
public class OrderController extends GenericController{
    private static final Logger logger = LoggerFactory.getLogger(OrderController.class);

    @Autowired
    private OrderService orderService;

    //保存订单
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(@RequestBody OrderInfo orderInfo, HttpServletRequest request, HttpServletResponse response) {
        //保存订单
        int num = orderService.save(orderInfo);
        if(num==1){
            renderSuccessString(response,orderInfo,"保存成功");
        }else {
            renderErrorString(response, "保存失败");
        }
    }

    //修改
    @RequestMapping(value = "/update",method = RequestMethod.POST)
    public void update(@RequestBody OrderInfo orderInfo, HttpServletRequest request, HttpServletResponse response) {
        //保存订单
        int num = orderService.update(orderInfo);
        if(num==1){
            renderSuccessString(response,orderInfo,"修改成功");
        }else {
            renderErrorString(response, "修改失败");
        }
    }

    //完成订单
    @RequestMapping(value = "/complete",method = RequestMethod.POST)
    public void complete(@RequestBody OrderInfoComplete orderInfo, HttpServletRequest request, HttpServletResponse response) {
        //保存订单
        orderService.complete(orderInfo);
        renderSuccessString(response,orderInfo,"操作成功");
    }

    //删除订单
    @RequestMapping(value = "/delete",method = RequestMethod.POST)
    public void delete( HttpServletRequest request, HttpServletResponse response) {
        Integer id = Integer.valueOf(request.getParameter("id"));
        orderService.delete(id);
        renderSuccessString(response,id,"保存成功");

    }
   /* //返回jsp视图展示
    @RequestMapping(value = "/getUserModel",method = RequestMethod.GET)
    public ModelAndView getUsers1(@RequestParam Integer userId) {
        ModelAndView modelAndView = new ModelAndView();
        //调用service方法得到用户列表
        User users = userService.getUsers(userId);
        //将得到的用户列表内容添加到ModelAndView中
        modelAndView.addObject("users",users);
        //设置响应的jsp视图
        modelAndView.setViewName("getUsers");
        logger.info("===============================成功查询用户列表！");
        return modelAndView;
    }
    //返回json格式数据，形式1
    @RequestMapping(value = "/getUserJson1",method = RequestMethod.GET)
    @ResponseBody
    public User getUsers2(@RequestParam Integer userId, HttpServletRequest request, HttpServletResponse response) {
        //调用service方法得到用户列表
        User users = userService.getUsers(userId);
        logger.info("==========================" +
                "=====成功查询用户列表！");
        return users;
    }

    //返回json格式数据，形式2（自定义了返回的格式）
    @RequestMapping(value = "/getUserJson2",method = RequestMethod.GET)
    public void getUsers3(@RequestParam Integer userId, HttpServletRequest request, HttpServletResponse response) {
        //调用service方法得到用户列表
        User users = userService.getUsers(userId);
        logger.info("===============================成功查询用户列表！");
        renderSuccessString(response, users);
    }*/
}
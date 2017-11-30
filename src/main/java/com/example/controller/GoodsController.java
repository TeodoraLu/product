package com.example.controller;

import com.example.bean.*;
import com.example.service.GoodsService;
import com.example.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping(value = "/goods")
public class GoodsController extends GenericController{
    private static final Logger logger = LoggerFactory.getLogger(GoodsController.class);

    @Autowired
    private GoodsService goodsService;

    //登录
    @RequestMapping(value = "/query",method = RequestMethod.POST)
    public void query(HttpServletRequest request, HttpServletResponse response) {
        //调用service方法得到用户列表
        List<GoodsStock> goodsStocks = goodsService.query();
        renderSuccessString(response,goodsStocks,"获取成功");
    }

    //添加原材料
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(@RequestBody GoodsStock goodsStock, HttpServletRequest request, HttpServletResponse response) {
        //保存成品库存
        int num = goodsService.save(goodsStock);
        if(num==1){
            renderSuccessString(response,goodsStock,"保存成功");
        }else {
            renderErrorString(response, "保存失败");
        }
    }
/*
    //添加原材料采购
    @RequestMapping(value = "/makeGoodsStock",method = RequestMethod.POST)
    public void BuyMaterialStock(@RequestBody GoodsStock materialStockBuy, HttpServletRequest request, HttpServletResponse response) {
        if(materialStockBuy==null||"".equals(materialStockBuy)){
            renderErrorString(response, "参数为空");
        }
        MaterialStock materialStock = materialService.queryById(materialStockBuy.getId());

        //保存购买流水记录
        Expenditure expenditure = new Expenditure();
        expenditure.setAmount(materialStockBuy.getPrice());
        expenditure.setMaterialName(materialStock.getMaterialName());
        expenditure.setDate(new Date());
        materialService.saveExpenditure(expenditure);

        //计算原材料库存总量 新数量 = 原数量 + 采购数量
        Integer materialQuantity = materialStockBuy.getMaterialQuantity()+materialStock.getMaterialQuantity();

        //计算单价  新单价 = （原库存数量 x 原单价 + 采购总价）÷ （原数量 + 采购数量）
        BigDecimal price = materialStock.getMaterialPrice().multiply(new BigDecimal(materialStock.getMaterialQuantity())).add(materialStockBuy.getPrice()).divide(new BigDecimal(materialQuantity));

        // (materialStock.getMaterialQuantity()*materialStock.getMaterialPrice()+materialStockBuy.getPrice())/materialQuantity;
        materialStock.setMaterialQuantity(materialQuantity);
        materialStock.setMaterialPrice(price);
        materialService.update(materialStock);
        renderSuccessString(response,materialStock,"保存成功");
    }*/







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
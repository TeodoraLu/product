package com.example.service;

import com.example.bean.GoodsStock;
import com.example.bean.OrderInfo;
import com.example.bean.OrderInfoComplete;
import com.example.bean.User;
import com.example.dao.mapper.OrderInfoMapper;
import com.example.dao.mapper.OrderInfoQueryMapper;
import com.example.dao.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OrderService {
    @Autowired
    private OrderInfoQueryMapper orderInfoQueryMapper;

    @Autowired
    private OrderInfoMapper orderInfoMapper;

    public List<OrderInfo> getOrder(String type) {
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("type",type);
        return orderInfoQueryMapper.queryOrderInfo(param);
    }

    public int save(OrderInfo orderInfo) {
        return orderInfoMapper.insertSelective(orderInfo);
    }

    public int update(OrderInfo orderInfo) {
        return orderInfoMapper.updateByPrimaryKeySelective(orderInfo);
    }

    public void complete(OrderInfoComplete orderInfo) {
       // 订单完成时需update订单表，订单状态变为完成，
        // goods_cost 字段由0变为 订单金额 - 订单中产品的数量 * 产品单价（order_info.goods_cost = order_info.goods_price - goods_stock.material_price * order_info.goods_quantity）
        BigDecimal goodsProfit = orderInfo.getGoodsPrice().subtract(orderInfo.getGoodsUnitPrice().multiply(BigDecimal.valueOf(orderInfo.getGoodsQuantity())));
        OrderInfo orderInfoUpdate = new OrderInfo();
        orderInfoUpdate.setId(orderInfo.getId());
        orderInfoUpdate.setType("1");
        orderInfoUpdate.setGoodsProfit(goodsProfit);
        orderInfoMapper.updateByPrimaryKeySelective(orderInfoUpdate);
    }

}
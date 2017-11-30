package com.example.service;

import com.example.bean.Expenditure;
import com.example.bean.GoodsStock;
import com.example.bean.MaterialStock;
import com.example.dao.mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsService {

    @Autowired
    private GoodsStockQueryMapper goodsStockQueryMapper;

    @Autowired
    private GoodsStockMapper goodsStockMapper;

    public List<GoodsStock> query(){
        return goodsStockQueryMapper.query();
    }
    public int save(GoodsStock goodsStock) {
        return goodsStockMapper.insertSelective(goodsStock);
    }
}
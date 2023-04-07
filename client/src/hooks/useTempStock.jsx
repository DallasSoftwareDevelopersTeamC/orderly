import { useState, useEffect } from 'react';

export const useTempInStock = (inventory, isUsingStock, setIsUsingStock, tempInStock, setTempInStock, useSelectedOnlyOn, selectedItems) => {

    useEffect(() => {
        console.log(selectedItems)
    }, [selectedItems])

    // -------------- use tempInStock state that is declared in the inventory.context to setTempInStock-------------

    useEffect(() => {
        const inStockData = {};
        inventory.forEach((item) => {
            inStockData[item.id] = item.inStock;
        });
        setTempInStock(inStockData);

        // console.log(tempInStock)
    }, [inventory]);

    // ----------- Update tempInStock every second based on its previous value ---------
    useEffect(() => {
        let intervalId = null;
        if (isUsingStock === true) {
            if (selectedItems.size > 0) {
                decreaseStock();
            } else {
                setIsUsingStock(false);
                window.alert("Must select some products before hitting play.");
                return;
            }
            function decreaseStock() {
                intervalId = setInterval(() => {
                    setTempInStock((prevInStock) => {
                        const updatedInStock = {};
                        inventory.forEach((item) => {
                            // update tempInStock for only selected products if useSelectedOnlyOn is on
                            // if (useSelectedOnlyOn && !selectedItems.includes(item.id)) {
                            if (!selectedItems.includes(item.id)) {
                                updatedInStock[item.id] = prevInStock[item.id];
                            } else {
                                // decrease selected items
                                console.log(item.id)
                                console.log(selectedItems)
                                updatedInStock[item.id] =
                                    prevInStock[item.id] > 0 ? prevInStock[item.id] - 1 : 0;
                            }
                        });
                        return updatedInStock;
                    });
                }, 2000);
            }

        }
        return () => clearInterval(intervalId);
    }, [inventory, isUsingStock, useSelectedOnlyOn]);

    return [setTempInStock];
}

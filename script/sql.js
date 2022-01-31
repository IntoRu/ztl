// создаём объект с лампами

let lamp = [
    // Warm White 2700K LED
    {model: '26100233', color: 'Warm White 2700K LED', length: 627},
    {model: '26100180', color: 'Warm White 2700K LED', length: 877},
    {model: '26100177', color: 'Warm White 2700K LED', length: 1227},
    {model: '26100215', color: 'Warm White 2700K LED', length: 1627},
    {model: '26100183', color: 'Warm White 2700K LED', length: 1227},
    {model: '26100218', color: 'Warm White 2700K LED', length: 1647},
    {model: '26100385', color: 'Warm White 2700K LED', length: 277 },
    {model: '26100382', color: 'Warm White 2700K LED', length: 277},
    {model: '26100365', color: 'Warm White 2700K LED', length: 1527},
    {model: '26100293', color: 'Warm White 2700K LED', length: 530},
    {model: '26100260', color: 'Warm White 2700K LED', length: 1297},
    {model: '26101216', color: 'Warm White 2700K LED', length: 1477},
    {model: '26100258', color: 'Warm White 2700K LED', length: 1297},
    {model: '26100288', color: 'Warm White 2700K LED', length: 1647},
    {model: '26100341', color: 'Warm White 2700K LED', length: 577},
    {model: '26001840', color: 'Warm White 2700K LED', length: 530},
    {model: '26100372', color: 'Warm White 2700K LED', length: 277},
    {model: '26100211', color: 'Warm White 2700K LED', length: 277},
    {model: '26100282', color: 'Warm White 2700K LED', length: 1227},
    {model: '26100285', color: 'Warm White 2700K LED', length: 1477},
    {model: '26100246', color: 'Warm White 2700K LED', length: 1477},
    {model: '26100273', color: 'Warm White 2700K LED', length: 877},
    {model: '26001840', color: 'Warm White 2700K LED', length: 1053},
    {model: '26100256', color: 'Warm White 2700K LED', length: 967},
    {model: '26101206', color: 'Warm White 2700K LED', length: 270},
    {model: '26100276', color: 'Warm White 2700K LED', length: 270},
    {model: '26100276', color: 'Warm White 2700K LED', length: 927},
    {model: '26100186', color: 'Warm White 2700K LED', length: 877},
    {model: '26100254', color: 'Warm White 2700K LED', length: 637},
    //Natural White 4000K LED
    {model: '26000706', color: 'Natural White 4000K LED', length: 2770},
    {model: '26100314', color: 'Natural White 4000K LED', length: 783},
    {model: '26100181', color: 'Natural White 4000K LED', length: 877},
    {model: '26100366', color: 'Natural White 4000K LED', length: 1527},
    {model: '26100178', color: 'Natural White 4000K LED', length: 1227},
    {model: '26100261', color: 'Natural White 4000K LED', length: 1297},
    {model: '26101213', color: 'Natural White 4000K LED', length: 1447},
    {model: '26100216', color: 'Natural White 4000K LED', length: 1647},
    {model: '26100373', color: 'Natural White 4000K LED', length: 2770},
    {model: '26100294', color: 'Natural White 4000K LED', length: 1053},
    {model: '261001841', color: 'Natural White 4000K LED', length: 1053},
    //Natural White 4500K LED
    {model: '26100234', color: 'Natural White 4500K LED', length: 627},
    {model: '26100181', color: 'Natural White 4500K LED', length: 877},
    {model: '26100178', color: 'Natural White 4500K LED', length: 1227 },
    {model: '26100216', color: 'Natural White 4500K LED', length: 1627},
    {model: '261001841', color: 'Natural White 4500K LED', length: 530},
    {model: '26100184', color: 'Natural White 4500K LED', length: 1227},
    {model: '26100259', color: 'Natural White 4500K LED', length: 1297},
    {model: '26100286', color: 'Natural White 4500K LED', length: 1477},
    {model: '26100247', color: 'Natural White 4500K LED', length: 1477},
    {model: '26100289', color: 'Natural White 4500K LED', length: 1647},
    {model: '26100219', color: 'Natural White 4500K LED', length: 1647},
    {model: '26100386', color: 'Natural White 4500K LED', length: 277},
    {model: '26100274', color: 'Natural White 4500K LED', length: 877},
    {model: '26100383', color: 'Natural White 4500K LED', length: 277},
    {model: '26100342', color: 'Natural White 4500K LED', length: 577},
    {model: '26100255', color: 'Natural White 4500K LED', length: 637},
    {model: '26100324', color: 'Natural White 4500K LED', length: 727},
    {model: '26100273', color: 'Natural White 4500K LED', length: 877},
    //White Red LED
    {model: '26100235', color: 'White Red LED', length: 627},
    {model: '26100182', color: 'White Red LED', length: 877},
    {model: '26100179', color: 'White Red LED', length: 1227},
    {model: '26100217', color: 'White Red LED', length: 1627},
    {model: '26100384', color: 'White Red LED', length: 277},
    {model: '26101208', color: 'White Red LED', length: 927},
    {model: '26101209', color: 'White Red LED', length: 1527},
    {model: '26100262', color: 'White Red LED', length: 1297},
    {model: '26100374', color: 'White Red LED', length: 277},
    {model: '26100235', color: 'White Red LED', length: 627},
    {model: '26100275', color: 'White Red LED', length: 877},
    {model: '26100281', color: 'White Red LED', length: 977},
    {model: '26100295', color: 'White Red LED', length: 1053},
    {model: '26100284', color: 'White Red LED', length: 1227},
    {model: '26100185', color: 'White Red LED', length: 1227},
    {model: '26100287', color: 'White Red LED', length: 1477},
    {model: '26100188', color: 'White Red LED', length: 877},
    {model: '26100272', color: 'White Red LED', length: 977},
    {model: '26100248', color: 'White Red LED', length: 1477},
    {model: '26100290', color: 'White Red LED', length: 1647},
    {model: '26100220', color: 'White Red LED', length: 1647},
    {model: '26100387', color: 'White Red LED', length: 277},
    {model: '26100278', color: 'White Red LED', length: 927},
    //White Red TS LUM
    {model: '04380732', color: 'White Red TS LUM', length: 863},
    {model: '04380731', color: 'White Red TS LUM', length: 552},
    {model: '04380733', color: 'White Red TS LUM', length: 1115},
    //LUM Cold White 6400K
    {model: '26100135', color: 'LUM Cold White 6400K', length: 1210},
    {model: '26100134', color: 'LUM Cold White 6400K', length: 910},
    {model: '26100133', color: 'LUM Cold White 6400K', length: 603},
    {model: '26100136', color: 'LUM Cold White 6400K', length: 1510},
    //Natural White
    {model: '26100360', color: 'Natural White', length: 1157},
    {model: '26100363', color: 'Natural White', length: 1507},
    {model: '26010076', color: 'Natural White', length: 1100},
    {model: '26010078', color: 'Natural White', length: 1200},
    {model: '26010077', color: 'Natural White', length: 1500},
    {model: '26010075', color: 'Natural White', length: 9000},
    {model: '26100388', color: 'Natural White', length: 7070},
    {model: '26100367', color: 'Natural White', length: 7070},
    {model: '26100358', color: 'Natural White', length: 9070},
    {model: '26100357', color: 'Natural White', length:9070},
    {model: '26100333', color: 'Natural White', length: 1647},
    {model: '26100305', color: 'Natural White', length: 1227},
    {model: '26100350', color: 'Natural White', length: 4570},
    {model: '26100352', color: 'Natural White', length: 5570},
    {model: '26100354', color: 'Natural White', length: 6070},
    {model: '26100339', color: 'Natural White', length: 277},
    {model: '26100336', color: 'Natural White', length: 6270},
    {model: '26010066', color: 'Natural White', length: 1500},
    {model: '26100392', color: 'Natural White', length: 577},
    {model: '26100316', color: 'Natural White', length: 627},
    {model: '26100308', color: 'Natural White', length: 877},
    {model: '26100330', color: 'Natural White', length: 8770},
    {model: '26100327', color: 'Natural White', length: 1227},
    {model: '26100311', color: 'Natural White', length: 1647},
    //White Red
    {model: '26100364', color: 'White Red', length: 1227},
    {model: '26100355', color: 'White Red', length: 6070},
    {model: '26100358', color: 'White Red', length: 9070},
    {model: '26100361', color: 'White Red', length: 1157},
    {model: '26100334', color: 'White Red', length: 1647},
    {model: '26100340', color: 'White Red', length: 277},
    {model: '26100328', color: 'White Red', length: 1227},
    {model: '26100306', color: 'White Red', length: 1227},
    {model: '26100312', color: 'White Red', length: 1647},
    {model: '26100393', color: 'White Red', length: 577},
    {model: '26100317', color: 'White Red', length: 627},
    {model: '26100309', color: 'White Red', length: 877},
    {model: '26100337', color: 'White Red', length: 627},
    {model: '26100327', color: 'White Red', length: 1227},
    //Warm White LED TLF-TUBE
    {model: '26100024', color: 'Warm White LED TLF-TUBE', length: 1500},
    {model: '26100022', color: 'Warm White LED TLF-TUBE', length: 900},
    {model: '26100029', color: 'Warm White LED TLF-TUBE', length: 970},
    {model: '04386695', color: 'Warm White LED TLF-TUBE', length: 850},
    {model: '26100023', color: 'Warm White LED TLF-TUBE', length: 300},
    {model: '26100126', color: 'Warm White LED TLF-TUBE', length: 576},
    {model: '26100097', color: 'Warm White LED TLF-TUBE', length: 900},
    {model: '26100088', color: 'Warm White LED TLF-TUBE', length: 1200},
    {model: '26100100', color: 'Warm White LED TLF-TUBE', length: 1200},
    {model: '26100103', color: 'Warm White LED TLF-TUBE', length: 1500},
    {model: '26100089', color: 'Warm White LED TLF-TUBE', length: 1500},
    {model: '26100087', color: 'Warm White LED TLF-TUBE', length: 900},
    //Natural White LED TUBE
    {model: '26100044', color: 'Natural White LED TUBE', length: 970},
    {model: '26100043', color: 'Natural White LED TUBE', length: 900},
    {model: '26100045', color: 'Natural White LED TUBE', length: 1200},
    {model: '26100124', color: 'Natural White LED TUBE', length: 300},
    {model: '26100127', color: 'Natural White LED TUBE', length: 576},
    {model: '261000098', color: 'Natural White LED TUBE', length: 900},
    {model: '26100100', color: 'Natural White LED TUBE', length: 1200},
    {model: '26100104', color: 'Natural White LED TUBE', length: 1500},
    {model: '26100042', color: 'Natural White LED TUBE', length: 1500},
    {model: '26100092', color: 'Natural White LED TUBE', length: 1500},
    {model: '26100090', color: 'Natural White LED TUBE', length: 900},
    //White Red LED TLF-TUBE
    {model: '26100037', color: 'White Red LED TLF-TUBE', length: 970},
    {model: '26100125', color: 'White Red LED TLF-TUBE', length: 576},
    {model: '26100036', color: 'White Red LED TLF-TUBE', length: 600},
    {model: '26100122', color: 'White Red LED TLF-TUBE', length: 300},
    {model: '26100099', color: 'White Red LED TLF-TUBE', length: 900},
    {model: '26100093', color: 'White Red LED TLF-TUBE', length: 900},
    {model: '26100102', color: 'White Red LED TLF-TUBE', length: 1200},
    {model: '26100105', color: 'White Red LED TLF-TUBE', length: 1500},
    {model: '26100094', color: 'White Red LED TLF-TUBE', length: 1200},
    {model: '26100095', color: 'White Red LED TLF-TUBE', length: 1500},
    
]

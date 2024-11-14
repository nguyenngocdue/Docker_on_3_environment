backend/
└── src/
    ├── main.ts                      # File cấu hình chính, bật versioning và setGlobalPrefix('/api')
    ├── user/                        # Thư mục module cho API "user"
    │   ├── users.v1.controller.ts    # Controller cho users phiên bản v1
    │   ├── users.v2.controller.ts    # Controller cho users phiên bản v2
    │   ├── user.service.ts           # Service cho user (dùng chung cho các phiên bản)
    │   └── user.module.ts            # Module định nghĩa cho user
    ├── order/                       # Thư mục module cho API "order"
    │   ├── orders.v1.controller.ts   # Controller cho orders phiên bản v1
    │   ├── orders.v2.controller.ts   # Controller cho orders phiên bản v2
    │   ├── order.service.ts          # Service cho order (dùng chung cho các phiên bản)
    │   └── order.module.ts           # Module định nghĩa cho order
    ├── shipping/                    # Thư mục module cho API "shipping"
    │   ├── shippings.v1.controller.ts # Controller cho shippings phiên bản v1
    │   ├── shippings.v2.controller.ts # Controller cho shippings phiên bản v2
    │   ├── shipping.service.ts        # Service cho shipping (dùng chung cho các phiên bản)
    │   └── shipping.module.ts         # Module định nghĩa cho shipping
    └── ...
    
frontend/
└── src/
    ├── config.js                    # File cấu hình API URL và các endpoint
    ├── services/                    # Service Layer để quản lý API
    │   ├── userService.js           # Service để gọi API cho users
    │   ├── orderService.js          # Service để gọi API cho orders
    │   └── shippingService.js       # Service để gọi API cho shippings
    └── types/                       # Kiểu dữ liệu TypeScript cho API response
        ├── user.ts                  # Định nghĩa kiểu dữ liệu cho user
        ├── order.ts                 # Định nghĩa kiểu dữ liệu cho order
        └── shipping.ts              # Định nghĩa kiểu dữ liệu cho shipping

# Create a comprehensive layered system architecture diagram for AMAR e-commerce website
diagram_code = """
flowchart TB
    subgraph "Frontend Layer"
        A[👤 User Interface<br/>Next.js + TailwindCSS<br/>Framer Motion]
        B[📱 Product Catalog<br/>Mobile Design]
        C[🛒 Shopping Cart<br/>State Management]
        D[✅ Checkout Form<br/>Hyderabad Locations]
    end
    
    subgraph "Backend Layer"
        E[🚀 Node.js API<br/>Express Server]
        F[🔐 Auth System<br/>Order Processing]
    end
    
    subgraph "Database Layer"
        G[📊 Google Sheets API<br/>Products + Orders]
        H[🔄 Real-time Sync<br/>Inventory Updates]
    end
    
    subgraph "External Services"
        I[💳 UPI Gateway<br/>Google Pay]
        J[📧 SendGrid Email<br/>Notifications]
        K[🗺️ Google Maps API<br/>Drop Locations]
    end
    
    A --> B --> C --> D
    D --> E --> F
    F --> G --> H
    F --> I --> J
    D -.-> K
    K -.-> D
    
    style A fill:#ffcdd2,stroke:#d32f2f,color:#000
    style E fill:#ffcdd2,stroke:#d32f2f,color:#000
    style F fill:#ffcdd2,stroke:#d32f2f,color:#000
    style G fill:#e8f5e8,stroke:#2e7d32,color:#000
    style I fill:#e3f2fd,stroke:#1976d2,color:#000
    style J fill:#fff3e0,stroke:#f57c00,color:#000
    style K fill:#f3e5f5,stroke:#7b1fa2,color:#000
"""

# Create the mermaid diagram with the Perplexity theme
png_path, svg_path = create_mermaid_diagram(
    diagram_code, 
    png_filepath='amar_architecture.png',
    svg_filepath='amar_architecture.svg',
    width=1400,
    height=1000
)

print(f"Comprehensive system architecture diagram saved as: {png_path} and {svg_path}")

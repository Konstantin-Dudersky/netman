
export interface NetworkAdapter{
    adapter_type: string;
    adapter_type_id: number;
    caption: string;
    config_manager_error_code: int
    ConfigManagerUserConfig: bool
    string   CreationClassName;
    string   Description;
    string   DeviceID;
    boolean  ErrorCleared;
    string   ErrorDescription;
    string   GUID;
    uint32   Index;
    datetime InstallDate;
    boolean  Installed;
    uint32   InterfaceIndex;
    uint32   LastErrorCode;
    string   MACAddress;
    string   Manufacturer;
    uint32   MaxNumberControlled;
    uint64   MaxSpeed;
    string   Name;
    net_connection_id: string;
}
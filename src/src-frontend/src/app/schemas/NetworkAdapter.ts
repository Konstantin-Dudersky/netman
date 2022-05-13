export interface NetworkAdapter{
    adapter_type: string;
    adapter_type_id: number;
    caption: string;
    config_manager_error_code: number;
    config_manager_user_config: boolean;
    creation_class_name: string;
    description: string;
    device_id: string;
    error_cleared: boolean;
    error_description: string;
    guid: string;
    index: number;
    install_date: string;
    installed: boolean;
    interface_index: number;
    last_error_code: number;
    mac_address: string;
    manufacturer: string;
    max_number_controlled: number;
    max_speed: number;
    name: string;
    net_connection_id: string;
}

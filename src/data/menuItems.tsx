import { MenuItem } from "../interfaces/appInterfaces";



export const menuItems: MenuItem[] = [
    {
        name: 'Entradas y Defectos',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Sociedades',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    },
    {
        name: 'Propiedades',
        icon: 'toggle-outline',
        component: 'SwitchScreen'
    },
    {
        name: 'Validacion de Documentos',
        icon: 'alert-circle-outline',
        component: 'AlertScreen'
    },
    {
        name: 'Tomos',
        icon: 'document-text-outline',
        component: 'TextInputScreen'
    },
    {
        name: 'Rollos',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen'
    },
    {
        name: 'Tasa Unica',
        icon: 'list-outline',
        component: 'CustomSectionListScreen'
    },
    {
        name: 'Agente Residente',
        icon: 'copy-outline',
        component: 'ModalScreen'
    },
    {
        name: 'Folio Suspendido',
        icon: 'download-outline',
        component: 'InfiniteScrollScreen'
    },
]


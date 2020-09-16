export interface IGetProducts {
    execute(): (dispatch: any) => Promise<void>
}
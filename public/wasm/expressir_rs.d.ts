/* tslint:disable */
/* eslint-disable */

export function attach_remarks(wire_json: string, source: string, annotations: boolean): string;

export function check(wire_json: string, dialect?: string | null): string;

export function format(wire_json: string, no_remarks: boolean): string;

export function parse_population(source: string): string;

export function parse_schema(source: string): string;

export function validate_population(entities_json: string, source: string): string;

export function wire_schema(source: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly attach_remarks: (a: number, b: number, c: number, d: number, e: number) => [number, number, number, number];
    readonly check: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly expr_attach_remarks: (a: number, b: number, c: number) => number;
    readonly expr_check: (a: number, b: number) => number;
    readonly expr_format: (a: number, b: number) => number;
    readonly expr_last_error: () => number;
    readonly expr_parse_population: (a: number) => number;
    readonly expr_parse_schema: (a: number) => number;
    readonly expr_string_free: (a: number) => void;
    readonly expr_validate_population: (a: number, b: number) => number;
    readonly expr_version: () => number;
    readonly format: (a: number, b: number, c: number) => [number, number, number, number];
    readonly parse_population: (a: number, b: number) => [number, number, number, number];
    readonly parse_schema: (a: number, b: number) => [number, number, number, number];
    readonly validate_population: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly wire_schema: (a: number, b: number) => [number, number, number, number];
    readonly parsanol_c_last_error: () => number;
    readonly parsanol_c_parse: (a: bigint, b: number, c: number, d: number) => number;
    readonly parsanol_c_parse_len: (a: bigint, b: number, c: number, d: number, e: number) => number;
    readonly parsanol_c_register: (a: number) => bigint;
    readonly parsanol_c_release: (a: bigint) => void;
    readonly parsanol_grammar_atom_count: (a: number) => number;
    readonly parsanol_grammar_free: (a: number) => void;
    readonly parsanol_grammar_new: (a: number) => number;
    readonly parsanol_grammar_new_with_error: (a: number, b: number) => number;
    readonly parsanol_grammar_root: (a: number) => number;
    readonly parsanol_parg_error: (a: number, b: number) => number;
    readonly parsanol_parg_free: (a: number) => void;
    readonly parsanol_parg_parse: (a: number, b: number) => number;
    readonly parsanol_parg_parse_recovering: (a: number, b: number, c: number) => number;
    readonly parsanol_parse: (a: number, b: number, c: number) => number;
    readonly parsanol_parse_end_pos: (a: number, b: number) => number;
    readonly parsanol_parse_simple: (a: number, b: number) => number;
    readonly parsanol_result_ast_json: (a: number) => number;
    readonly parsanol_result_end_pos: (a: number) => number;
    readonly parsanol_result_error: (a: number) => number;
    readonly parsanol_result_free: (a: number) => void;
    readonly parsanol_result_success: (a: number) => number;
    readonly parsanol_version: () => number;
    readonly parsanol_string_free: (a: number) => void;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
